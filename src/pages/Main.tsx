import ProductInformation from "../organisms/ProductInformation/index"
import ProductStats from "../organisms/ProductStats";
import Frontend from "../templates/Frontend";

import * as S from './styles';

function Main() {
  return (
  <Frontend>
    <S.Container>

      <ProductInformation />
      <ProductStats />
      
    </S.Container>
  </Frontend>
  );
}

export default Main;