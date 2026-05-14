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
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.85 }}>
          <strong>URL correta:</strong>{" "}
          <a href="https://widineii.github.io/Portifolioo/" style={{ color: "#67e8f9" }}>
            widineii.github.io/Portifolioo
          </a>{" "}
          — não confunda com <strong>/Portifolio/</strong> (site HTML antigo). Se o console mostrar um{" "}
          <code>index-….js</code> diferente do que aparece no GitHub em Actions → deploy, o navegador está com{" "}
          <strong>cache</strong>: F12 → <strong>Application</strong> → <strong>Clear site data</strong>, ou abra em{" "}
          <strong>aba anônima</strong>.
        </p>
        </div>
      );
    }
    return this.props.children;
  }
}
