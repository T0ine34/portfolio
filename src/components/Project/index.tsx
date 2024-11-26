import './index.scss';

import { Card, Space } from 'antd';

function Project({ title, children, detail, linkTo }: { title: string, children: React.ReactNode, detail?: string, linkTo?: string }) {
    return (
        <section className="Project">
            <Card title={title} extra={linkTo && <a href={linkTo} target="_blank" rel="noreferrer">link</a>}>
                <Space direction="vertical">
                    {children}
                </Space>
            </Card>
        </section>
    );
}

export default Project;