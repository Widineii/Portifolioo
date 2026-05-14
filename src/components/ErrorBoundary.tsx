import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            background: "#07070d",
            color: "#f4f4f8",
            lineHeight: 1.6,
          }}
        >
          <h1 style={{ fontSize: "1.25rem" }}>Algo deu errado ao carregar o portfólio</h1>
          <p>
            Tente atualizar com <strong>Ctrl+F5</strong> (limpa cache). Se o problema continuar, abra o site em
            outra aba anônima.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
