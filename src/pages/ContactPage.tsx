import React, {useState} from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import axios from "@/axios.ts";

const ContactPage: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  })

  const [response, setResponse] = useState('');

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFormData(prev => ({
      name: value,
      email: prev.email,
      msg: prev.msg
    }))
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFormData(prev => ({
      name: prev.name,
      email: value,
      msg: prev.msg
    }))
  }

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setFormData(prev => ({
      name: prev.name,
      email: prev.email,
      msg: value
    }))
  }

  const onSubmitClick = async () => {
    console.log(formData)
    const {data} = await axios.post('/contact', formData)
    setResponse(data)
  }

  return (
      <main className={'lg:w-3/5 w-full h-screen bg-zinc-100 px-6 flex flex-col items-center justify-center'}>
        <h1 className={'text-2xl md:text-6xl font-bold'}>{response ? response : 'Only CTA on the page'}</h1>
        {!response &&
        <Card className={'w-64 md:w-80 pt-5 mt-10'}>
          <CardContent>
            <form>
              <div className={'grid w-full items-center gap-4'}>
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <Input onChange={e => onNameChange(e)} value={formData.name}
                         type='text' id='name' placeholder='Value'/>
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input onChange={e => onEmailChange(e)} value={formData.email}
                         type='email' id='email' placeholder='Value'/>
                </div>
                <div>
                  <Label htmlFor='text'>Message</Label>
                  <Textarea onChange={e => onTextChange(e)} value={formData.msg}
                            id='text' placeholder='Value'/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={onSubmitClick} className='w-full'>Submit</Button>
          </CardFooter>
        </Card>}
      </main>
  );
};

export default ContactPage;
