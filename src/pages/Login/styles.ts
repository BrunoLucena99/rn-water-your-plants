import styled from 'styled-components/native';
import {MaterialCommunityIcon} from '../../components/Icons';
import theme from '../../utils/theme';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.secondary};
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.white};
  font-family: ${theme.fontFamily.semiBold};
  font-size: ${theme.fontSizes.xl}px;
  text-align: center;
`;

export const AuthGoogleButton = styled.TouchableOpacity`
  background: ${props => props.theme.white};
  width: 100%;
  margin-top: 30px;
  padding: 10px 15px;
  border-radius: 10px;
  elevation: 2;
  flex-direction: row;
  justify-content: center;
`;

export const AuthGoogleText = styled.Text`
  font-family: ${theme.fontFamily.regular};
  text-align: center;
  font-size: ${theme.fontSizes.md}px;
`;

export const GoogleIcon = styled(MaterialCommunityIcon)`
  position: absolute;
  left: 10px;
  align-self: center;
`;
