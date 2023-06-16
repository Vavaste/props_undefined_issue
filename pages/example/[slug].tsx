import {NextPage} from "next";

interface ExampleProps {
    age: number;
}
export const getStaticProps: () => Promise<{ props: ExampleProps }> = async () => {
    const exampleReturn : ExampleProps ={
        age: 20
    }
    return({props:exampleReturn})
};

export async function getStaticPaths() {
    return {
        paths: ["/example/15"],
        fallback: true,
    };
}

export const stringifyNumber = (number: number) => {
    return number.toString();
};

const Home: NextPage<ExampleProps> =({
                                         age
                                     }) =>{
    console.log(age)
    return(
        <>
            <div>{stringifyNumber(age)}</div>
        </>
    )
}

export default Home
