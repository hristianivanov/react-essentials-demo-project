import CoreConcept from './CoreConsept';
import { CORE_CONCEPTS} from '../data';

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((coceptItem) => <CoreConcept key={coceptItem.title} {...coceptItem} />)}
            </ul>
        </section>
    )
}