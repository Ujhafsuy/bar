import { Link } from "react-router-dom"

import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);
export function Registro() {
  async function handleRegisterSubmit(event) {
    event.preventDefault();
    
    const fullName = event.target.fullName.value;
    const email = event.target.registerEmail.value;
    const password = event.target.registerPassword.value;
  
    try {
      // Cria usuário no Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + "/confirm", // página de confirmação
        },
      });
  
      if (error) throw error;
  
      alert(
        "Cadastro realizado! Verifique seu e-mail para confirmar a conta ✅"
      );
  
      // Armazena dados temporários no localStorage para depois ativar a conta
      localStorage.setItem(
        "pendingUser",
        JSON.stringify({ id: data.user.id, fullName, email })
      );
  
      // Redireciona para uma página que orienta o usuário a confirmar o e-mail
      window.location.href = "/confirm";
    } catch (err) {
      console.error("Erro ao registrar:", err.message);
      alert("Erro ao registrar: " + err.message);
    }
  }

    return (
        <>
            <main>
                <div className="min-h-screen bg-(--bg-normal-pages) flex flex-col items-center justify-center p-4">
                    <div className="w-full max-w-md space-y-8 flex flex-col justify-around">
                        {/* Back Button */}
                        <Link to="/">
                            <Button variant="ghost" className="cursor-pointer text-white hover:bg-slate-700 self-start p-2">
                            <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>

                        {/* Register Form */}
                        <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wider">Cadastrar-se</h1>
                        </div>

                        <form onSubmit={handleRegisterSubmit} className="space-y-6">
                        <div className="space-y-6">
                            <div>
                            <Label htmlFor="fullName" className="text-gray-400 text-sm">
                                Nome Completo
                            </Label>
                            <input
                                id="fullName"
                                type="text"
                                required
                                className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder:text-gray-500 outline-none"
                            />
                            </div>

                            <div>
                            <Label htmlFor="registerEmail" className="text-gray-400 text-sm">
                                Email
                            </Label>
                            <input
                                id="registerEmail"
                                type="email"
                                required
                                className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder:text-gray-500 outline-none"
                            />
                            </div>

                            <div>
                            <Label htmlFor="registerPassword" className="text-gray-400 text-sm">
                                Senha
                            </Label>
                            <input
                                id="registerPassword"
                                type="password"
                                required
                                className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder:text-gray-500 outline-none"
                            />
                            </div>
                        </div>

                        <div className="pt-4">
                              <Button type="submit" className="mb-4 cursor-pointer w-full bg-black hover:bg-(--ciano-bt) text-white py-3 rounded-md font-medium">
                                Confirmar
                              </Button>

                            <Link to="/login">
                                <Button
                                type="button"
                                className="cursor-pointer w-full bg-black hover:bg-(--ciano-bt) text-white py-3 rounded-md font-medium"
                                >
                                Já tenho uma conta
                                </Button>
                            </Link>
                        </div>
                        </form>
                    </div>
                    </div>
            </main>
        </>
    )
}

export function Login() {
    async function handleLoginSubmit(event) {
      event.preventDefault();
    
      const email = event.target.loginEmail.value;
      const password = event.target.loginPassword.value;
    
      try {
        // 1️⃣ Faz login no Auth
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
    
        if (error) throw error;
    
        const user = data.user;
    
        // 2️⃣ Busca os dados extras na tabela "users"
        const { data: userProfile, error: profileError } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.id) // <-- aqui usa UUID
          .single();
    
        if (profileError) throw profileError;
    
        console.log("Login bem-sucedido:", userProfile);
        alert(`Bem-vindo, ${userProfile.name}! 🚀`);
    
      } catch (err) {
        console.error("Erro ao logar:", err.message);
        alert("Erro ao logar: " + err.message);
      }
    }
    return (
        <>
            <main>
            <div className="min-h-screen bg-(--bg-normal-pages) flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 flex flex-col justify-around">
          {/* Back Button */}
            <Link to="/">
                <Button variant="ghost" className="cursor-pointer text-white hover:bg-slate-700 self-start p-2">
                <ArrowLeft className="h-5 w-5" />
                </Button>
            </Link>

          {/* Login Form */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wider">Login</h1>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-400 text-sm">
                  Email
                </Label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder:text-gray-500 outline-none"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-400 text-sm">
                  Senha
                </Label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>


            <div className="space-y-4">
                <Link to="/instruct">
                    <Button
                        type="submit"
                        className="mb-4 cursor-pointer w-full bg-black hover:bg-(--ciano-bt) text-white py-3 rounded-md font-medium"
                    >
                        Confirmar
                    </Button>
                </Link>

            <Link to="/register">
                <Button
                    type="button"
                    className="cursor-pointer w-full bg-black hover:bg-(--ciano-bt) text-white py-3 rounded-md font-medium"
                >
                    Cadastrar-se
                </Button>
            </Link>
            </div>
            <div className="text-center">
              <button type="button" className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
                Esqueceu a senha?
              </button>
            </div>
          </form>
        </div>
      </div>
            </main>
        </>
    )
}

export function ConfirmEmail() {
  useEffect(() => {
    async function activateUser() {
      const pendingUser = JSON.parse(localStorage.getItem("pendingUser"));
      if (!pendingUser) return;

      try {
        const res = await fetch("/api/activate-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pendingUser),
        });

        const data = await res.json();

        if (res.ok) {
          alert(data.message);
          localStorage.removeItem("pendingUser");
          window.location.href = "/";
        } else {
          alert("Erro: " + data.error);
        }
      } catch (err) {
        console.error(err);
        const text = await res.text();
        console.log("Resposta do backend:", text);

        const data = text ? JSON.parse(text) : {};
        alert("Erro ao ativar usuário: " + err.message);
      }
    }

    activateUser();
  }, []);

  return <div>Verificando confirmação de e-mail...</div>;
}