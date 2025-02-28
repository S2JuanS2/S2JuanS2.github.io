import Footer from "../components/Footer";
import Header from "../components/Header";

function ReadMore (){
    return (
        <div>
            <Header></Header>
            <div className="flex border-4 pt-35 pb-35 justify-center">
                <div className="pt-10 pb-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 text-center">
                    <h1 className="text-white font-bold underline underline-offset-4 mb-5">¿CÓMO TOMAR UNA DECISIÓN?</h1>
                    <div className="text-white text-justify pl-5 pr-5">
                        <p>
                        <strong>Titulo de la decisión</strong><br/>
                        El primer paso consiste en establecer el título de la decisión.
                        </p>
                        <p className="mt-4">
                        <strong>Identificación de los Pros y Contras</strong><br/>
                        Listar todos los aspectos positivos (pros) y negativos (contras) de cada opción que estamos considerando. Los pros pueden ser beneficios tangibles o intangibles, como mejoras en la eficiencia, ahorro de tiempo, o satisfacción personal. Los contras, por otro lado, son los aspectos negativos, como los costos adicionales, el riesgo de fracaso o el tiempo necesario para implementar la opción.
                        </p>
                        <p class="mt-4">
                        <strong>Asignación de Ponderaciones</strong><br/>
                        No todos los pros y contras tienen el mismo peso o importancia. Por lo tanto, es necesario asignar una ponderación a cada aspecto en una escala de 1 a 5 (siendo 5 lo mas relevante y 1 lo mas insignificativo). Este valor refleja la importancia relativa que cada factor tiene en el proceso de decisión. Por ejemplo, si un beneficio clave es muy importante, se le asignará una ponderación mayor.
                        </p>
                        <p class="mt-4">
                        <strong>Impacto de cada Pro y Contra</strong><br/>
                        Después de asignar las ponderaciones, califica cada pro y contra en una escala de 1 a 3 (siendo 3 el más positivo y 1 el más negativo). Esto ayuda a cuantificar cómo cada factor impacta la decisión.
                        </p>
                        <p class="mt-4">
                        <strong>Evaluación Final y Decisión</strong><br/>
                        Aunque los cálculos proporcionan una visión objetiva, no debes olvidar la evaluación subjetiva. A veces, factores emocionales o intangibles pueden influir en la decisión final. Considera el contexto, los riesgos, y los beneficios a largo plazo antes de tomar la decisión final.
                        </p>
                    </div>
                    <h1 className="mb-5 mt-10 text-white font-bold underline">CRÉDITOS</h1>
                    <div className="flex flex-col">
                        <a href="https://www.flaticon.es/" title="trabajo en equipo iconos" className="text-white underline underline-offset-5">Iconos creados por srip - Flaticon</a>
                        <div className="flex flex-row justify-center">
                            <a href="https://pixabay.com/es/users/b_chauhan-47828121/?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=16843" className="text-white underline underline-offset-5">Bina Chauhan</a>
                            <p className="ml-2 mr-2 text-white">de</p>
                            <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=16843" className="text-white underline underline-offset-5">Pixabay</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ReadMore;