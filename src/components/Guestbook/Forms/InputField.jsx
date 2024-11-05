export const InputField = ({ label, register, name, errors, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name}>{label}</label>
    <input name={name} type={type} className="bg-secondary w-full p-2 border border-primary" {...register(name)} />
    <p className="text-red-700">{errors[name]?.message}</p>
  </div>
);
