import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { FormAction, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";
import { SelectedOptions } from "../../components/SelectedOption";

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormAction.setCurrentStep,
                payload: 4,
            });
        }
    }, [dispatch, navigate, state.name]);

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4 </p>
                <h1> Cadastro concluido com sucesso!</h1>
                <hr />

                <h2> Seus dados: </h2>
                <p> Seu nome: {state.name}</p>
                <p> Seu e-mail: {state.email}</p>
                <p> Seu github: {state.github}</p>

                <p>
                    {" "}
                    {state.level === 0 && (
                        <SelectedOptions
                            title="Sou iniciante"
                            description="Programando a menos de 2 anos"
                            icon="👶"
                            selected={state.level === 0}
                            //onClick={() => setLevel(0)}
                        />
                    )}
                </p>
                <p>
                    {state.level === 1 && (
                        <SelectedOptions
                            title="Sou profissional"
                            description="Programando a 2 anos ou mais"
                            icon="😎"
                            selected={state.level === 1}
                            //onClick={() => setLevel(0)}
                        />
                    )}
                </p>

                <Link className="link" to="/step2">
                    Voltar
                </Link>
            </C.Container>
        </Theme>
    );
};
