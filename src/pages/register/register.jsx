import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { ButtonRegister } from '../../components/ButtonRegister';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin,CriarText, Row, Wrapper,} from './styles';

const Register =() => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const handleClickBackLogin = () => {
        navigate('/login')
    }
    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?fullname=${formData.fullname}&email=${formData.email}&telefone=${formData.telefone}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/home') 
                return
            }

            alert('Usuário cadastrdo com sucesso!')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
                 <CriarText onClick={handleClickBackLogin} >Volta Login</CriarText>
            </Column>
            
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Full Name" leftIcon={<MdEmail/>} name="fullname" control={control}/>
                    {errors.fullname && <span>Nome e Obrigatorio é obrigatório</span>}
                    <Input type="email" placeholder="Seu Melhor @e-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="tel" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" autocomplete="off" placeholder="Celular ex: (11) 96123-4567" leftIcon={<MdEmail/>} name="telefone" control={control}/>
                    {errors.fullname && <span>Nome e Obrigatorio é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}   name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <ButtonRegister title="CRIAR MINHA CONTAR GRÁTIS" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <CriarText>Ao clicar em "criar minha conta grátis", declaro que aceito as
                    <text><a href="#"> Políticas de Privacidade</a></text>e os <a href="#">Termos de Uso da DIO.</a></CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
 
    </>)
}

export { Register }