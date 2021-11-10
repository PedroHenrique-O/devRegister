import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { FormAction, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";
import { SelectedOptions } from "../../components/SelectedOption";

export const FormStep2 = () => {
    let navigate = useNavigate();
    const setLevel = (level: number) => {
        dispatch({
            type: FormAction.setLevel,
            payload: level,
        });
    };
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormAction.setCurrentStep,
                payload: 2,
            });
        }
    }, [dispatch, navigate, state.name]);

    const handleNextStep = () => {
        if (state.name !== "") {
            navigate("/step3");
        } else {
            alert("Preencha os dados!");
        }
    };
    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3 </p>
                <h1> {state.name}, o que melhor descreve você?</h1>
                <p>
                    Escolha a opção que descreva seu estado profissional no
                    momento.
                </p>
                <hr />
                <SelectedOptions
                    title="Sou iniciante"
                    description="Programando a menos de 2 anos"
                    icon="👶"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectedOptions
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <Link className="link" to="/">
                    Voltar
                </Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};
