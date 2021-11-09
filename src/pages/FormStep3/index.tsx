import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { FormAction, useForm } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    // useEffect(() => {
    //     dispatch({
    //         type: FormAction.setCurrentStep,
    //         payload: 3,
    //     });
    // }, [dispatch]);
    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormAction.setCurrentStep,
                payload: 3,
            });
        }
    }, [dispatch, navigate, state.name]);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormAction.setEmail,
            payload: e.target.value,
        });
    };
    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormAction.setGithub,
            payload: e.target.value,
        });
    };

    const handleNextStep = () => {
        if (state.name !== "" && state.github !== "") {
            console.log(state);
        } else {
            alert("Preecha os dados!");
        }
        // if (state.name !== "") {
        //     navigate("/step2");
        // } else {
        //     alert("Por favor, preencha seu nome completo.");
        // }
    };
    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 {state.currentStep} </p>
                <h1> {state.name}, onde podemos te encontrar?</h1>
                <p>Preencha as informações para que possamos lhe contatar.</p>
                <hr />
                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu github
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGitHubChange}
                    />
                </label>
                <Link className="link" to="/step2">
                    Voltar
                </Link>

                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </C.Container>
        </Theme>
    );
};
