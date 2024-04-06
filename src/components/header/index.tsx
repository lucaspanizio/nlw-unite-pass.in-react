import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-5 py-8">
      <img src="/nlw-unite-icon.svg" alt="Icone do Evento NLW Unite" />

      <nav className="flex items-center gap-5">
        <NavLink
          to="/eventos"
          className="font-medium pointer-events-none opacity-50 select-none"
        >
          Eventos
        </NavLink>
        <NavLink to="/participantes" className="font-medium select-none">
          Participantes
        </NavLink>
      </nav>
    </div>
  );
};
