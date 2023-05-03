import React from 'react';
import { useForm } from "react-hook-form";
import s from './style.module.css';

function AddProduct(props) {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {console.log(data);
};
console.log(errors);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="title" {...register("title", {minLength: 5, pattern: /^[a-zа-я]+(\s[a-zа-я]+)+$/i, required: true})} />

      <p className={s.error}>{errors.title.type}</p>


      <input type="number" placeholder="price" {...register("price", {required: true, min: 200, max: 1000})} />
      <input type="number" placeholder="discount" {...register("discount", {min: 0, max: 100})} />
      <input type="number" placeholder="width" {...register("width", {required: true, min: 0, max: 1000})}/>
      <input type="number" placeholder="height" {...register("height", {required: true, min: 0, max: 1000})}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;

