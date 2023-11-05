type Props = {
  id: string;
  error?: string;
  errors?: string[];
};

export default function ErrorField({ id, error, errors }: Props) {
  if (error) {
    return (
      <div id={id} aria-live="polite" className="mt-2 text-sm text-red-500">
        <p>{error}</p>
      </div>
    );
  } else if (errors) {
    return (
      <div id={id} aria-live="polite" className="mt-2 text-sm text-red-500">
        {errors.map((error: string) => (
          <p key={error}>{error}</p>
        ))}
      </div>
    );
  }

  return null;
}
