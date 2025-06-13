// src/App.jsx
// A indentação está com 'Tab', como você prefere.

import React from 'react';

function App() {
	// Por enquanto, vamos colocar dados de exemplo (mock data) diretamente aqui
	// para podermos construir e ver o visual da nossa interface.
	// Mais tarde, substituiremos isso pelos dados reais do Firebase.
	const user = { email: 'vasks.vic@gmail.com' };
	const tasks = [
		{ id: 1, text: 'Beber 2L de água hoje', completed: true },
		{ id: 2, text: 'Caminhar 30 minutos', completed: false },
		{ id: 3, text: 'Estudar React por 1 hora', completed: false },
	];

	return (
		// Aplicando as classes de estilo do Tailwind que você projetou
		<div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-50 to-white flex flex-col items-center justify-center p-6 font-sans">
			<div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 text-center">
				<h1 className="text-4xl font-bold text-green-600 mb-2">Saúde em Dia</h1>
				
				{/* Seção do Usuário */}
				{user ? (
					<>
						<p className="text-gray-600">Bem-vindo(a), {user.email}!</p>
						<button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
							Sair (Logout)
						</button>
					</>
				) : (
					<p>Carregando...</p> // Isso será substituído pela tela de login
				)}

				<hr className="my-8 border-t border-gray-200" />

				{/* Seção do Formulário */}
				<div>
					<h2 className="text-2xl font-semibold text-blue-600 mb-4">
						Adicionar Nova Meta
					</h2>
					<div className="flex gap-2">
						<input
							type="text"
							placeholder="Ex: Ler 10 páginas de um livro"
							className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
						<button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
							Adicionar
						</button>
					</div>
				</div>

				<hr className="my-8 border-t border-gray-200" />

				{/* Seção da Lista de Metas */}
				<div>
					<h3 className="text-2xl font-semibold text-green-700 mb-4">
						Minhas Metas
					</h3>
					<ul className="space-y-3 text-left text-gray-800">
						{tasks.map(task => (
							<li 
								key={task.id} 
								className={`p-4 shadow-sm rounded-lg border flex items-center cursor-pointer transition hover:shadow-md ${task.completed ? 'bg-green-100 border-green-200' : 'bg-white'}`}
							>
								<span className="mr-4 text-xl">{task.completed ? '✅' : '⏳'}</span>
								<span className={task.completed ? 'line-through text-gray-500' : ''}>
									{task.text}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;