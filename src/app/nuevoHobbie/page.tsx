
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

        
        function createFormBody(details: Record<string, string>): string {
          const formBody = Object.keys(details)
              .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
              .join('&');
          
          return formBody;
      }

        const handleSubmit =async (values:z.infer<typeof formSchema> )=>{  


const formBody = createFormBody(values);

const res = await fetch("http://34.173.49.95:3000/hobbies", { 
  method: "POST",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
body: formBody});

router.push("/hobbies");
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