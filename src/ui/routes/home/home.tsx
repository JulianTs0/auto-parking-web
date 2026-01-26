import "../../styles/index.css"
import Layout from "../../layout/layout";

import { ViewModel } from "./viewmodel";

export default function HomeRoute() {

    const {
        home
    } = ViewModel();

    return (
        <Layout>
            <div>{home}</div>
        </Layout>
    )
}
