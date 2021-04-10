import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Parametro</h1>
			<p>Valor: {id}</p>
		</div>
	);
};

export default Param;
