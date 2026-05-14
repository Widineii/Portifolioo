type ScrollProgressBarProps = {
  progress: number;
};

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  const pct = Math.round(progress * 100);
  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label="Progresso de leitura por seções"
    >
      <div className="scroll-progress__bar" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}
