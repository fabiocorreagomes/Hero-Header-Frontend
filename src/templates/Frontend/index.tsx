import * as S from './styles.ts'

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return <S.Container>Teste Frontend {children}</S.Container>;
};

export default Frontend;