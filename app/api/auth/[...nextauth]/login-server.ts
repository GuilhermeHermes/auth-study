import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Aqui você pode acessar os dados da requisição, como query parameters ou body
    const { code } = req.query;

    // Exemplo: redirecionar ou processar o código de autorização recebido
    // Aqui você pode implementar a lógica para processar o código recebido do serviço de autenticação

    // Exemplo de resposta de redirecionamento
    res.redirect('/dashboard'); // Redireciona para a página de dashboard após o login
}