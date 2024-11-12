import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import html from "./assets/icons/html.svg";
import angular from "./assets/icons/angular.svg";
import bootstrap from "./assets/icons/bootstrap.svg";
import css3 from "./assets/icons/css3.svg";
import cypress from "./assets/icons/cypress.svg";
import docker from "./assets/icons/docker.svg";
import figma from "./assets/icons/figma.svg";
import git from "./assets/icons/git.svg";
import javascript from "./assets/icons/javascript.svg";
import jest from "./assets/icons/jest.svg";
import jupyter from "./assets/icons/jupyter.svg";
import mocha from "./assets/icons/mocha.svg";
import mui from "./assets/icons/mui.svg";
import next from "./assets/icons/next.svg";
import nodejs from "./assets/icons/nodejs.svg";
import postman from "./assets/icons/postman.svg";
import python from "./assets/icons/python.svg";
import react from "./assets/icons/react.svg";
import redux from "./assets/icons/redux.svg";
import sass from "./assets/icons/sass.svg";
import shadcnui from "./assets/icons/shadcnui.svg";
import storybook from "./assets/icons/storybook.svg";
import swiper from "./assets/icons/swiper.svg";
import tailwindcss from "./assets/icons/tailwindcss.svg";
import typescript from "./assets/icons/typescript.svg";
import vite from "./assets/icons/vite.svg";
import vitest from "./assets/icons/vitest.svg";
import webpack from "./assets/icons/webpack.svg";
import mjml from "./assets/icons/mjml.png";

import amvox from "./assets/imgs/amvox.png";
import amvoxbg from "./assets/imgs/logo_amvox.png";
import knots from "./assets/imgs/knots.svg";
import gol from "./assets/imgs/gol.svg";
import ffx from "./assets/imgs/ffx.png";
import filantropica from "./assets/imgs/filantropia.png";
import boldman from "./assets/imgs/boldman.svg";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Experience } from "./components/partials/experience";
import Card from "./components/partials/cards";

import data from "./data/data.json"

function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border flex items-center">
        <div className="flex flex-1 justify-center items-center flex-row gap-6 p-4">
          <a href="#">Hero</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="ml-auto cursor-pointer px-4">
          <Avatar>
            <AvatarImage src="https://github.com/drlazinho.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="bg-zinc-200 min-h-screen w-full flex content-center items-center">
        <div className="flex bg-slate-600 w-full content-center items-center gap-2 p-[2.5rem]">
          <h1 className="bg-red-200 flex-1 text-center">Olá, Sou Dev Lazáro</h1>
        </div>
      </div>

      <section
        className="container min-h-screen m-auto p-4 py-[5rem] flex flex-col items-center justify-center"
        id="about"
      >
        <div className="flex gap-6 flex-row">
          <img
            src="https://github.com/drlazinho.png"
            alt=""
            className="flex-2 rounded-md border-zinc-600 border-2 w-[20%]"
          />
          <div className="flex flex-col gap-3">
            <h2>Sobre Mim</h2>
            <p>
              Trabalhando como Desenvolvedor Front-end desde 2021 com
              experiência em React.js, Next.js e Angular, experiência e contato
              em projetos de ERP e CMS, utilizando metodologias ágeis.
              Apaixonado por tecnologia, gosto de colaborar com o
              desenvolvimento backend e design, além de participar no
              levantamento de requisitos e na compreensão das regras de negócio,
              sempre com o objetivo de proporcionar a melhor experiência para o
              usuário.
            </p>
            <p>
              Em constante evolução, estou fazendo MBA em Fullstack, onde estou
              adquirindo aperfeiçoamento nas habilidades de programação nas
              Stacks Javascript, Front-end, Back-end, Mobile e conhecimento em
              liderança. Com previsão de conclusão para maio de 2025.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-8">
          {/* Primeira linha com 13 ícones */}
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            <div className="box flex flex-col items-center" key="1">
              <img src={next} alt="next" />
              <p>Next.js</p>
            </div>
            <div className="box flex flex-col items-center" key="2">
              <img src={react} alt="react" />
              <p>React</p>
            </div>
            <div className="box flex flex-col items-center" key="18">
              <img src={redux} alt="redux" />
              <p>Redux</p>
            </div>
            <div className="box flex flex-col items-center" key="3">
              <img src={typescript} alt="typescript" />
              <p>TypeScript</p>
            </div>
            <div className="box flex flex-col items-center" key="4">
              <img src={javascript} alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div className="box flex flex-col items-center" key="5">
              <img src={sass} alt="sass" />
              <p>Sass</p>
            </div>
            <div className="box flex flex-col items-center" key="6">
              <img src={css3} alt="css3" />
              <p>CSS3</p>
            </div>
            <div className="box flex flex-col items-center" key="7">
              <img src={html} alt="html" />
              <p>HTML5</p>
            </div>
            <div className="box flex flex-col items-center" key="8">
              <img src={angular} alt="angular" />
              <p>Angular</p>
            </div>
            <div className="box flex flex-col items-center" key="9">
              <img src={bootstrap} alt="bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div className="box flex flex-col items-center" key="10">
              <img src={mui} alt="mui" />
              <p>MUI</p>
            </div>
            <div className="box flex flex-col items-center" key="11">
              <img src={tailwindcss} alt="tailwindcss" />
              <p>Tailwind CSS</p>
            </div>
            <div className="box flex flex-col items-center" key="12">
              <img src={shadcnui} alt="shadcnui" />
              <p>Shadcn UI</p>
            </div>
            <div className="box flex flex-col items-center" key="13">
              <img src={vite} alt="vite" />
              <p>Vite</p>
            </div>
          </div>

          {/* Segunda linha com os demais ícones */}
          <div className="flex justify-center flex-wrap gap-4">
            <div className="box flex flex-col items-center" key="14">
              <img src={nodejs} alt="nodejs" />
              <p>Node.js</p>
            </div>
            <div className="box flex flex-col items-center" key="15">
              <img src={postman} alt="postman" />
              <p>Postman</p>
            </div>
            <div className="box flex flex-col items-center" key="17">
              <img src={python} alt="python" />
              <p>Python</p>
            </div>
            <div className="box flex flex-col items-center" key="19">
              <img src={storybook} alt="storybook" />
              <p>Storybook</p>
            </div>
            <div className="box flex flex-col items-center" key="20">
              <img src={swiper} alt="swiper" />
              <p>Swiper</p>
            </div>
            <div className="box flex flex-col items-center" key="22">
              <img src={figma} alt="figma" />
              <p>Figma</p>
            </div>
            <div className="box flex flex-col items-center" key="23">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
            <div className="box flex flex-col items-center" key="24">
              <img src={jupyter} alt="jupyter" />
              <p>Jupyter</p>
            </div>
            <div className="box flex flex-col items-center" key="25">
              <img src={jest} alt="jest" />
              <p>Jest</p>
            </div>
            <div className="box flex flex-col items-center" key="28">
              <img src={cypress} alt="cypress" />
              <p>Cypress</p>
            </div>
            <div className="box flex flex-col items-center" key="28">
              <img src={vitest} alt="vitest" />
              <p>Vitest</p>
            </div>
            <div className="box flex flex-col items-center" key="26">
              <img src={mocha} alt="mocha" />
              <p>Mocha</p>
            </div>
            <div className="box flex flex-col items-center" key="29">
              <img src={webpack} alt="webpack" />
              <p>Webpack</p>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button>
              <Plus /> Ver experiência
            </Button>
          </DialogTrigger>

          <DialogContent className="w-full max-w-[1000px]">
            <DialogHeader>
              <DialogTitle>
                <h3 className="text-center">Experiência</h3>
              </DialogTitle>
            </DialogHeader>
            <Experience />
            {/* <section className="container h-[600px] overflow-auto">
              <div className="bg-zinc-900 text-white p-6 flex flex-col gap-4">
                <div className="border-white border-2 rounded-lg p-4">
                  <p>Março de 2024 - Outubro de 2024</p>
                  <img src={gol} alt="Amvox Logo" className="w-[150px] py-4" />
                  <p className="pb-4">GOL Linhas Aéreas S.A</p>
                  <p>
                    Desenvolvedor Frontend em Angular, trabalhando em squads com
                    tarefas de desenvolvimento e implementação de novas features
                    em uma B2C (Business to Consumer - empresa para consumidor).
                    <br />
                    <br />
                    ✔Desenvolvimento de Aplicações Web Angular Framework
                    v12-v15;
                    <br />
                    ✔Desenvolvimento de Interfaces baseada em Protótipos Figma;
                    <br />
                    ✔Desenvolvimento de Projeto sob Metodologia Agil;
                    <br />
                    ✔Colaboração com equipe de QA;
                    <br />
                    ✔Colaboração com equipe de desenvolvimento Backend;
                  </p>
                  <div className="flex flex-row gap-2 flex-wrap py-4">
                    <div className="box flex flex-col items-center" key="2">
                      <img src={angular} alt="angula" />
                    </div>
                    <div className="box flex flex-col items-center" key="3">
                      <img src={typescript} alt="typescript" />
                    </div>
                    <div className="box flex flex-col items-center" key="4">
                      <img src={javascript} alt="javascript" />
                    </div>
                    <div className="box flex flex-col items-center" key="5">
                      <img src={sass} alt="sass" />
                    </div>
                    <div className="box flex flex-col items-center" key="6">
                      <img src={css3} alt="css3" />
                    </div>
                    <div className="box flex flex-col items-center" key="7">
                      <img src={html} alt="html" />
                    </div>
                    <div className="box flex flex-col items-center" key="9">
                      <img src={bootstrap} alt="bootstrap" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={git} alt="git" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={figma} alt="figma" />
                    </div>
                  </div>
                </div>

                <div className="border-white border-2 rounded-lg p-4">
                  <p>Novembro de 2022 - Fevereiro de 2024</p>
                  <img src={amvox} alt="Amvox" className="w-[150px] py-2" />
                  <p className="pb-4">
                    AMVOX - REISTAR INDÚSTRIA E COMÉRCIO DE ELETRÔNICOS LTDA
                  </p>
                  <p>
                    Como Desenvolvedor Frontend React em uma fábrica de produtos
                    eletrônicos, contribuir por melhorar e atualizar um ERP
                    (Enterprise Resource Planning - Planejamento de Recursos
                    Empresariais), integrando diversas áreas da empresa, desde a
                    produção até o financeiro, automatizando processos,
                    integrando dados e centralizando informações da empresa em
                    um único sistema para melhora na tomada de decisões. Também
                    iniciei no desenvolvimento de um CRM (Customer Relationship
                    Management - Gestão de Relacionamento com o Cliente) com
                    objetivo melhorar o relacionamento com os clientes e a
                    fidelização.
                    <br />
                    <br />
                    ✔ Aumento do número de usuários ativos de 20 - 100.
                    <br />
                    ✔ Mais de 50 páginas desenvolvidas em uma ERP. <br />✔
                    Sistemas Web desenvolvidos para setores de Logística,
                    Fiscal, Financeiro, Estoque, Produção, Tecnologia, Comercial
                    e Pós-venda. <br />
                    ✔Desenvolvimento e criação de interfaces e de aplicações
                    para web. <br />
                    ✔ Manutenção em sistemas existentes, implementando melhorias
                    e correção de falhas; <br />
                    ✔Integração de aplicações front-end com serviços web
                    RESTful; <br />
                    ✔Otimização de perfomance e desempenho das aplicações web
                    para dispositivos móveis e desktop;
                    <br />
                    ✔ Criação de uma nova aplicação CRM
                    <br />✔ Colaboração com a equipe de Backend com integração{" "}
                    <br />
                    ✔ Colaboração com a equipe de Design e tradução de
                    wireframes e interfaces <br />✔ Gráficos | Dashboards |
                    Formulários | Tabelas | Componentes UI | Validação |
                    Arquitetura.
                  </p>
                  <div className="flex flex-row gap-2 flex-wrap py-4">
                    <div className="box flex flex-col items-center" key="2">
                      <img src={react} alt="react" />
                    </div>
                    <div className="box flex flex-col items-center" key="18">
                      <img src={redux} alt="redux" />
                    </div>
                    <div className="box flex flex-col items-center" key="3">
                      <img src={typescript} alt="typescript" />
                    </div>
                    <div className="box flex flex-col items-center" key="4">
                      <img src={javascript} alt="javascript" />
                    </div>
                    <div className="box flex flex-col items-center" key="5">
                      <img src={sass} alt="sass" />
                    </div>
                    <div className="box flex flex-col items-center" key="6">
                      <img src={css3} alt="css3" />
                    </div>
                    <div className="box flex flex-col items-center" key="7">
                      <img src={html} alt="html" />
                    </div>

                    <div className="box flex flex-col items-center" key="9">
                      <img src={bootstrap} alt="bootstrap" />
                    </div>
                    <div className="box flex flex-col items-center" key="10">
                      <img src={mui} alt="mui" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={tailwindcss} alt="tailwindcss" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={git} alt="git" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={figma} alt="figma" />
                    </div>
                    <div
                      className="box flex flex-col items-center bg-zinc-700"
                      key="11"
                    >
                      <img src={swiper} alt="swiper" />
                    </div>
                    <div
                      className="box flex flex-col items-center bg-zinc-700"
                      key="11"
                    >
                      <img src={shadcnui} alt="shadcnui" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={vite} alt="vite" />
                    </div>
                  </div>
                </div>

                <div className="border-white border-2 rounded-lg p-4">
                  <p>Freelancer - 2021/2023</p>

                  <div className="flex flex-row gap-4 items-center content-center">
                    <div>
                      <img src={ffx} alt="FFX Logo" className="w-[100px]" />
                    </div>

                    <div>
                      <img src={filantropica} alt="" className="w-[250px] " />
                    </div>
                    <div>
                      <img src={knots} alt="" className="w-[200px]" />
                    </div>
                    <div>
                      <img src={boldman} alt="" className="w-[200px]" />
                    </div>
                  </div>
                  <p>
                    ✔Desenvolvimento de aplicações web com frontend.
                    <br />
                    ✔ B2C, Landing Page, SPA.
                    <br />
                    ✔Colaboração em prototipagem Figma
                    <br />
                    ✔Templates HTML para email.
                  </p>
                  <div className="flex flex-row gap-2 flex-wrap py-4">
                    <div className="box flex flex-col items-center" key="1">
                      <img src={next} alt="next" />
                    </div>
                    <div className="box flex flex-col items-center" key="2">
                      <img src={react} alt="react" />
                    </div>
                    <div className="box flex flex-col items-center" key="18">
                      <img src={redux} alt="redux" />
                    </div>
                    <div className="box flex flex-col items-center" key="3">
                      <img src={typescript} alt="typescript" />
                    </div>
                    <div className="box flex flex-col items-center" key="4">
                      <img src={javascript} alt="javascript" />
                    </div>
                    <div className="box flex flex-col items-center" key="5">
                      <img src={sass} alt="sass" />
                    </div>
                    <div className="box flex flex-col items-center" key="6">
                      <img src={css3} alt="css3" />
                    </div>
                    <div className="box flex flex-col items-center" key="7">
                      <img src={html} alt="html" />
                    </div>

                    <div className="box flex flex-col items-center" key="9">
                      <img src={bootstrap} alt="bootstrap" />
                    </div>

                    <div className="box flex flex-col items-center" key="11">
                      <img src={git} alt="git" />
                    </div>
                    <div className="box flex flex-col items-center" key="11">
                      <img src={figma} alt="figma" />
                    </div>
                    <div
                      className="box flex flex-col items-center bg-zinc-700"
                      key="11"
                    >
                      <img src={swiper} alt="swiper" />
                    </div>

                    <div className="box flex flex-col items-center" key="11">
                      <img src={vite} alt="vite" />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </DialogContent>
        </Dialog>
      </section>
      <section className="bg-slate-200"
      >
        <div      className="container min-h-screen m-auto py-[5rem] px-4 flex flex-col items-center "
        id="projects">
          <h2>Projetos</h2>
          

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {
                data.projects.map((i, key) => (

                  
                  
                  <Card
                  title={i.title}
                  description={i.description}
                  images={i.images}
                  developed={i.developed}
                  readme={i.readme}
                  app={i.app}
                  key={key}
                  
                  />
                )
                )
              }

 
  {/* <Card
    images={[
      'https://via.placeholder.com/320x192',
      'https://via.placeholder.com/320x192?text=Imagem+4',
      'https://via.placeholder.com/320x192?text=Imagem+5',
    ]}
  /> */}
</div>
        </div>

      </section>
    </div>
  );
}

export default App;
