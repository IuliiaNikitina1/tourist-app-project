import routesPage from './Routes';

// export default class Customdocument extends Document {
//     render() {
//         return (
//             <div>
//                 <div dangerouslySetInnerHTML={{__html: routesPage}}></div>
//             </div>
//         )
//     }
// }

    function RoutingPage () {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: routesPage}}></div>
            </div>
        )
    }

    export default RoutingPage;