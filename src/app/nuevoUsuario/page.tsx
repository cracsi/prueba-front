
"use client";

import { FormEvent } from 'react'
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from 'zod';
import {  useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const formSchema=z.object({
  nombres: z.string(),
  apellidos: z.string(),
  telefono: z.string()
});

    export default  function nuevoUsuario() {
        const router= useRouter();

        const form=useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
            nombres:"",
            apellidos:"",
          telefono:""
        }
        })

        const handleSubmit =async (values:z.infer<typeof formSchema> )=>{
          
          
let details=values;


const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
console.log(formBody);

const res = await fetch("http://34.173.49.95:3000/usuarios", { 
  method: "POST",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
body: formBody});

router.push("/usuarios");
        };

        return (
    <Form {...form}>
<form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField control={form.control} name="nombres" render={({field})=>{
            return <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombres:"
                type= "nombres" 
                {...field}
                />
              </FormControl>

            </FormItem>
            }}
            />
            <FormField control={form.control} name="apellidos" render={({field})=>{
            return <FormItem>
              <FormLabel>Descripcion</FormLabel>
              <FormControl>
                <Input placeholder="Apellidos:"
                type= "apellidos" 
                {...field}
                />
              </FormControl>

            </FormItem>
            }}
            />
            <FormField control={form.control} name="telefono" render={({field})=>{
            return <FormItem>
              <FormLabel>Descripcion</FormLabel>
              <FormControl>
                <Input placeholder="Telefono:"
                type= "telefono" 
                {...field}
                />
              </FormControl>

            </FormItem>
            }}
            />
            <Button type="submit">Submit</Button>
            </form>
    </Form>
         
        
    );
    }