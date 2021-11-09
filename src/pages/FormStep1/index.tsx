import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { FormAction, useForm } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormAction.setCurrentStep,
            payload: 1,
        });
    }, [dispatch]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormAction.setName,
            payload: e.target.value,
        });
    };

    const handleNextStep = () => {
        if (state.name !== "") {
            navigate("/step2");
        } else {
            alert("Por favor, preencha seu nome completo.");
        }
    };
    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3 </p>
                <h1> Vamos começar com seu nome </h1>
                <p>Preencha</p>
                <hr />
                <label>
                    Seu nome completo:
                    <input
                        type="next"
                        value={state.name}
                        autoFocus
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};
