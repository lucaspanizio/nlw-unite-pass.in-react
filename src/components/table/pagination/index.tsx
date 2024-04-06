import { Button } from '@/components/buttons';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react';

interface PaginationProps {
  step: number;
  total: number;
  totalPages: number;
  actualPage: number;
  callbacks: {
    goToFirstPage: () => void;
    goToPreviousPage: () => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
  };
}

export const Pagination: React.FC<PaginationProps> = ({
  step,
  total,
  totalPages,
  actualPage,
  callbacks,
}) => {
  return (
    <div className="flex justify-between">
      <div>{`Mostrando ${step} de ${total} itens`}</div>
      <div className="inline-flex items-center gap-8">
        <span>{`Página ${actualPage} de ${totalPages}`}</span>
        <div className="flex gap-1.5">
          <Button.Icon
            onClick={callbacks.goToFirstPage}
            disabled={actualPage === 1}
          >
            <ChevronsLeftIcon className="size-4" />
          </Button.Icon>
          <Button.Icon
            onClick={callbacks.goToPreviousPage}
            disabled={actualPage === 1}
          >
            <ChevronLeftIcon className="size-4" />
          </Button.Icon>
          <Button.Icon
            onClick={callbacks.goToNextPage}
            disabled={actualPage === totalPages}
          >
            <ChevronRightIcon className="size-4" />
          </Button.Icon>
          <Button.Icon
            onClick={callbacks.goToLastPage}
            disabled={actualPage === totalPages}
          >
            <ChevronsRightIcon className="size-4" />
          </Button.Icon>
        </div>
      </div>
    </div>
  );
};
