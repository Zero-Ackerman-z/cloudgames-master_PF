import { useNavigate } from "react-router-dom";
export const ApiWebURL = "http://localhost/";

interface LoginProps {
    onLogin: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const navigate = useNavigate();

    const iniciarSesion = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataForm = new FormData(event.currentTarget);

        const rutaServicio = ApiWebURL + "user_login.php";
        let formData = new FormData();
        formData.append("username", dataForm.get("usuario") as string); // Cambié "usuario" a "username"
        formData.append("password", dataForm.get("clave") as string);   // Cambié "clave" a "password"

        try {
            const response = await fetch(rutaServicio, { method: "POST", body: formData });
            const result = await response.json();

            if (response.ok) {
                if (result.message === "Login successful") {
                    alert(`Bienvenido, ${result.username}`);
                    localStorage.setItem("userId", result.userId);
                    localStorage.setItem("username", result.username);
                    onLogin(result); // Llamar a onLogin con los datos del usuario
                    navigate("/game"); // Redirigir a la página del juego
                } else {
                    alert(result.message); // Si el login falló, mostrar el mensaje
                }
            } else {
                alert(result.error || "Hubo un problema al intentar iniciar sesión.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
            alert("Hubo un problema al intentar iniciar sesión.");
        }
    };

    return (
        <section className="p-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                                <form onSubmit={iniciarSesion}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="usuario"
                                            placeholder="Usuario"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="clave"
                                            placeholder="Contraseña"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary w-100">
                                            Iniciar Sesión
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <p><a href="/forgot-password" className="text-decoration-none">¿Olvidaste tu contraseña?</a></p>
                                    <p>¿No tienes cuenta? <a href="/register" className="text-decoration-none">Regístrate</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;