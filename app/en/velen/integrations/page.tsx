import { Metadata } from 'next';
import IntegrationsClient from './IntegrationsClient';

export const metadata: Metadata = {
    title: 'Integration Guides - Velen',
    description: 'List of all integration guides to connect your data sources with Velen.',
};

export default function IntegrationsPage() {
    return <IntegrationsClient />;
}
