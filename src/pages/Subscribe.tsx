import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleNotch } from "phosphor-react";

import CodeMockupImg from '../assets/code-mockup.png';

import { useCreateSubscriberMutation } from "../graphql/generated";

import { Logo } from "../components/Logo";


export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center md:px-6">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto gap-4 flex-col md:flex-row">
        <div className="max-w-[640px] flex flex-col items-center md:items-start">
          <Logo />

          <h1 className="mt-6 text-[2.5rem] leading-tight text-center max-w-[400px] md:text-start md:max-w-full">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com  <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-6 text-gray-200 text-center max-w-[380px] leading-relaxed md:text-start md:max-w-full">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-full md:w-fit">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="flex mt-4 h-14 bg-green-500 uppercase py-4 rounded font-bold text-sm enabled:hover:bg-green-700 transition-colors disabled:opacity-50 items-center justify-center"
            >
              {loading ? (
                <CircleNotch className="animate-spin" size={24} />
              ) : (
                'Garantir minha vaga'
              )}
            </button>
          </form>
        </div>
      </div>

      <img src={CodeMockupImg} className="px-2 md:px-0" alt="" />
    </div>
  );
}
