
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
  nombre: z.string(),
  descripcion: z.string()
});

    export default  function nuevoHobbie() {
        const router= useRouter();

        const form=useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {nombre:"",
          descripcion:""
        }
        })

        const handleSubmit =async (values:z.infer<typeof formSchema> )=>{
          
console.log(JSON.stringify(values))


const res = await fetch("http://localhost:3000/hobbies", { 
  
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  'Accept': 'application/json',

  },
body: JSON.stringify(values)});
console.log(res);
        };

        return (
    <Form {...form}>
<form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField control={form.control} name="nombre" render={({field})=>{
            return <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre:"
                type= "nombre" 
                {...field}
                />
              </FormControl>

            </FormItem>
            }}
            />
            <FormField control={form.control} name="descripcion" render={({field})=>{
            return <FormItem>
              <FormLabel>Descripcion</FormLabel>
              <FormControl>
                <Input placeholder="Descripcion:"
                type= "descripcion" 
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