import React, { useState } from 'react';

const Semaforo = () => {
	const [color, setColor] = useState("red");

	const cambiarColor = () => {
		if (color === "red") {
			setColor("green");
		} else if (color === "green") {
			setColor("yellow");
		} else {
			setColor("red");
		}
	};

	const addPurple = () => {
		setColor("purple");
	};

	return (
		<div className='separar'>
			<div className='contenedor'>
				<div className='poste'></div>
				<div className="semaforo">
					<div
						className={`foco red ${color === "red" ? "activo-red" : ""}`}
						onClick={() => setColor("red")}
					></div>
					<div
						className={`foco yellow ${color === "yellow" ? "activo-yellow" : ""}`}
						onClick={() => setColor("yellow")}
					></div>
					<div
						className={`foco green ${color === "green" ? "activo-green" : ""}`}
						onClick={() => setColor("green")}
					></div>
					{color === "purple" && (
						<div
							className={`foco purple ${color === "purple" ? "activo-purple" : ""}`}
							onClick={() => setColor("purple")}
						></div>
					)}
				</div>
				<div className='container-boton'>
					<button onClick={cambiarColor} className='boton btn btn-primary'>Cambiar Color</button>
					<button onClick={addPurple} className='boton btn btn-primary'>Agregar morado</button>
				</div>
			</div>
			<div className='contenedor2'>
				<div className='poste'></div>
				<div className="semaforo">
					<div
						className={`foco red ${color === "red" ? "activo-red" : ""}`}
						onClick={() => setColor("red")}
					></div>
					<div
						className={`foco yellow ${color === "yellow" ? "activo-yellow" : ""}`}
						onClick={() => setColor("yellow")}
					></div>
					<div
						className={`foco green ${color === "green" ? "activo-green" : ""}`}
						onClick={() => setColor("green")}
					></div>
					{color === "purple" && (
						<div
							className={`foco purple ${color === "purple" ? "activo-purple" : ""}`}
							onClick={() => setColor("purple")}
						></div>
					)}
				</div>
			</div>
		</div>

	);
};

export default Semaforo;
