import React from 'react'
import { Content, NovoTopico, Titulo, Button, Posts, PostsContainer, FecharModal } from './styles'
import Modal from 'react-modal';
import Input from '../../Forms/Input/Input'

const TopicoComLogin = () => {
  const [novoTopicoModalOpen, setNovoTopicoModalOpen] = React.useState(false)

  const [resultadoPosts, setResultadoPosts] = React.useState([])

  const [titulo, setTitulo] = React.useState('')
  const [conteudo, setConteudo] = React.useState('')

  function openModal() {
    setNovoTopicoModalOpen(true)
  }

  function closeModal() {
    setNovoTopicoModalOpen(false)
  }


  async function handlePostar() {
    const usuario = window.localStorage.getItem('user')
    setResultadoPosts([...resultadoPosts,{usuario, titulo, conteudo}])
    closeModal(false)
  }
  

  return (
    <section>
      <Content>
        <NovoTopico onClick={openModal}>Novo Tópico</NovoTopico>
        <Modal
          isOpen={novoTopicoModalOpen}
          onRequestClose={closeModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <FecharModal onClick={closeModal}>X</FecharModal>
          <Input name="titulo" value={titulo} label="Titulo" onChange={({target}) => setTitulo(target.value)}/>
          <textarea
            value={conteudo}
            onChange={({target}) => setConteudo(target.value)}
            name="conteudo" 
            id="conteudo" 
            cols="60" 
            rows="10" 
            placeholder='Conteudo'
            />
          <Button onClick={handlePostar}>Postar</Button>
        </Modal>
      </Content>
      <Titulo>Tópicos</Titulo>
      <PostsContainer>
        {resultadoPosts && resultadoPosts.map(post => (
          <Posts key={post.usuario}>
            <p><span>Título</span>: {post.titulo}</p>
            <p><span>Criador:</span> {post.usuario}</p>
            <p><span>Conteudo:</span> {post.conteudo}</p>
          </Posts>
        ))}
        
      </PostsContainer>
      
    </section>
  )
}

export default TopicoComLogin