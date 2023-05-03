import { useForm } from "react-hook-form";
import s from './style.module.css';

export default function AddUser() {
const { register, handleSubmit } = useForm();
const onSubmit = data => console.log(data);

return (
<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
<input placeholder="firstname" {...register("firstName", {required: true, minLength: 3})}/>
<input placeholder="lastname" {...register("lastName")} />
<input placeholder="mail" {...register("mail", {pattern: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/})} />
<input type="number" {...register("age", { min: 18, max: 99 })} />
<input placeholder="work" {...register("work")} />
<select {...register("gender")}>
<option value="female">female</option>
<option value="male">male</option>
<option value="other">other</option>
</select>
<button type="submit">Send form</button>
</form>
);
}