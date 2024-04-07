import { ChangeEvent, ForwardedRef, createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebouce';
import { MoreHorizontalIcon } from 'lucide-react';
import { Input } from '@/components/inputs';
import { Table } from '@/components/table';
import { Button } from '@/components/buttons';
import { getAttendees } from '@/services/api/attendees';

export const Attendees: React.FC = () => {
  const checkboxHeaderRef: ForwardedRef<HTMLInputElement> = createRef();
  const [params, setParams] = useSearchParams({ page: '1' });
  const page = Number(params.get('page')) || 1;
  const pageIndex = page >= 1 ? page - 1 : page;
  const search = params.get('search') || '';
  const debouncedSearch = useDebounce(search);

  const { data, isLoading } = useQuery({
    queryKey: ['get_attendees', pageIndex, debouncedSearch],
    queryFn: () => getAttendees(pageIndex, debouncedSearch),
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (!data) {
    return <div>Ops! Ocorreu um erro, verifique se a API está online.</div>;
  }

  const { attendees, total, totalPages } = data;

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setParams({
      page: '1',
      ...(newSearch.length > 0 && { search: newSearch }),
    });
  };

  const goToPreviousPage = () => {
    setParams({ page: String(page - 1) });
  };

  const goToNextPage = () => {
    setParams({ page: String(page + 1) });
  };

  const goToFirstPage = () => {
    setParams({ page: '1' });
  };

  const goToLastPage = () => {
    setParams({ page: String(totalPages) });
  };

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (checkboxHeaderRef.current) {
      const checkboxRows = document.querySelectorAll<HTMLInputElement>(
        'input[type="checkbox"]:not(#checkbox-header)',
      );

      if (checkboxHeaderRef.current === event.currentTarget) {
        const headerIsChecked = checkboxHeaderRef.current?.checked || false;

        checkboxRows.forEach(
          (checkbox) => (checkbox.checked = headerIsChecked),
        );
      } else {
        const allCheckboxesChecked = Array.from(checkboxRows).every(
          (checkbox) => checkbox.checked,
        );

        checkboxHeaderRef.current.checked = allCheckboxesChecked;
      }
    }
  };

  const renderTableRows = () => {
    if (total === 0) {
      return (
        <Table.Line>
          <Table.Cell colSpan={6} className="text-center">
            Nenhum registro encontrado
          </Table.Cell>
        </Table.Line>
      );
    }

    return attendees.map((attendee) => {
      return (
        <Table.Line key={attendee.id}>
          <Table.Cell>
            <Input.Checkbox
              id={`checkbox-${attendee.id}`}
              onChange={onCheckboxChange}
            />
          </Table.Cell>
          <Table.Cell>{attendee.id}</Table.Cell>
          <Table.Cell>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white">{attendee.name}</span>
              <span>{attendee.email}</span>
            </div>
          </Table.Cell>
          <Table.Cell>{attendee.createdAt}</Table.Cell>
          <Table.Cell>
            {attendee.checkedInAt || (
              <span className="text-zinc-400">Não fez check-in</span>
            )}
          </Table.Cell>
          <Table.Cell>
            <Button.Icon isTransparent>
              <MoreHorizontalIcon className="size-4" />
            </Button.Icon>
          </Table.Cell>
        </Table.Line>
      );
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <h1 className="text-2xl font-bold select-none">Participantes</h1>
        <Input.Search
          value={search}
          onChange={onSearchChange}
          placeholder="Buscar participante..."
        />
      </div>

      <Table.Root>
        <Table.Header>
          <Table.Head style={{ width: 48 }}>
            <Input.Checkbox
              id="checkbox-header"
              ref={checkboxHeaderRef}
              onChange={onCheckboxChange}
            />
          </Table.Head>
          <Table.Head>Código</Table.Head>
          <Table.Head>Participante</Table.Head>
          <Table.Head>Data de inscrição</Table.Head>
          <Table.Head>Data do check-in</Table.Head>
          <Table.Head style={{ width: 64 }}></Table.Head>
        </Table.Header>

        <Table.Body>{renderTableRows()}</Table.Body>

        <Table.Foot>
          <Table.Cell colSpan={6}>
            <Table.Pagination
              step={attendees.length}
              total={total}
              totalPages={totalPages}
              actualPage={page}
              callbacks={{
                goToFirstPage,
                goToPreviousPage,
                goToNextPage,
                goToLastPage,
              }}
            />
          </Table.Cell>
        </Table.Foot>
      </Table.Root>
    </div>
  );
};
