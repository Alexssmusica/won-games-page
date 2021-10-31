import Heading from 'components/Heading';
import * as Style from './styles';

export type TextContentProps = {
    title?: string;
    content: string;
};

const TextContent = ({ title, content }: TextContentProps) => (
    <Style.Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </Style.Wrapper>
);

export default TextContent;
