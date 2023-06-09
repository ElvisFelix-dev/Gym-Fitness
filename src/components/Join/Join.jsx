import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e7d7usw', 'template_m9002hb', form.current, 'avv6uQ0puupw5tSE4')
      .then((result) => {
        console.log(result.text);
        toast.success('Email enviado com sucesso!');
        clearInput();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Ocorreu um erro ao enviar o email.');
      });
  }

  const clearInput = () => {
    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.value = '';
    }
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">pronto para</span>
          <span> nivelar</span>
        </div>
        <div>
          <span>seu corpo</span>
          <span className="stroke-text"> conosco</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="seu melhor email"
          />
          <button className="btn btn-j">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
