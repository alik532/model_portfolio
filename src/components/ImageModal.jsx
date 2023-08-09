import React from 'react'
import classes from '../styles/ImageModal.module.css'

const ImageModal = ({img, setOpenImg}) => {

	const closeImage = (e) => {
		e.stopPropagation()
		setOpenImg(null)
	}

	return (
		<div className={classes.modal} style={{display: img != null ? "flex" : "none"}} onClick={(e) => closeImage(e)}>
				<img className={classes.img} src={img} alt="" />
		</div>
	)
}

export default ImageModal