export const TextareaField = ({ label, register, name, rows, errors }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name}>{label}</label>
    <textarea name={name} rows={rows} className="border bg-secondary border-primary p-2 focus:border-primary" {...register(name)} />
    <p className="text-red-700">{errors[name]?.message}</p>
  </div>
);
