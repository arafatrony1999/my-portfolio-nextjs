import ClientGetServicePage from "./ClientGetServicePage";

const GetServicePage = async () => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getPricing', {cache: 'no-store'});
    const pricing = await res.json();

    return (
        <>
            <ClientGetServicePage pricing={pricing} />
        </>
    )
}

export default GetServicePage;