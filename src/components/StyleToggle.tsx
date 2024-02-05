import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./Button";
import { Header } from "./Header";

export function StyleToggle() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <Header />
      <p>
        Permitir que os usuários alternem entre dois estilos diferentes em um
        componente. Descrição: Crie um contexto simples em React para gerenciar
        o tema do aplicativo (claro ou escuro). Implemente um provedor de
        contexto que forneça um botão no componente principal para alternar
        entre os temas.
      </p>
      <Button />
      <h4>
        Utilize o contexto criado no Exercício 4 em um componente para exibir o
        tema atual e fornecer um botão para alternar o tema. Utilize o hook
        useContext para acessar o contexto e atualizar a aparência do componente
        com base no tema selecionado.
      </h4>
    </div>
  );
}
