import CoreConcept from './CoreConsept';
import { CORE_CONCEPTS } from '../data';
import Section from './Section';

export default function CoreConcepts() {
    return (
        <Section id='core-concepts' title='Core Concepts'>
            <ul>
                {CORE_CONCEPTS.map((coceptItem) => <CoreConcept key={coceptItem.title} {...coceptItem} />)}
            </ul>
        </Section>
    )
}