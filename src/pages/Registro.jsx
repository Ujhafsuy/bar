import { Link } from "react-router-dom"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export function Registro() {
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log("Login submitted")
    }
    
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        console.log("Register submitted")
    }

    return (
        <>
            <main>
                <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4">
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
                            <Link to="/instruct">
                                <Button type="submit" className="mb-4 cursor-pointer w-full bg-black hover:bg-(--ciano-bt) text-white py-3 rounded-md font-medium">
                                Confirmar
                                </Button>
                            </Link>

                            <Link to="/login">
                                <Button
                                type="button"
                                onClick={() => setCurrentPage("login")}
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
    const handleLoginSubmit = (e) => {
      e.preventDefault()
      console.log("Login submitted")
    }
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault()
      console.log("Register submitted")
    }

    return (
        <>
            <main>
            <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4">
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