import React, { useState, useContext, useRef, useEffect } from 'react'
import styles from './Actions.module.css'

import battleArrow from '../../assets/arrow.svg'
import Button from '../Button/Button'

import { GameContext } from '../../context/gameContext'

const Actions = (props) => {

    const pointingArrowRef = useRef(null)

    const { attackDuration } = useContext(GameContext)
    const [isAttackDisabled, setIsAttackDisabled] = useState(false)
    const [delay] = useState(300)

    const handleAttack = () => {
        props.initiateAttack()

        setIsAttackDisabled(true)
        props.setCurrentAttackingPokemon(prevState => {
            return prevState === 'left' ? 'right' : 'left'
        })

        setTimeout(() => {
            setIsAttackDisabled(false)
        }, attackDuration + delay)
    }

    const arrowTransform =
        props.currentAttackingPokemon === 'left' ?
            { transform: 'scaleX(-1)' } :
            { transform: 'scaleX(1)' }

    useEffect(() => {
        if (pointingArrowRef.current) {
            pointingArrowRef.current.style.transitionDelay = `${attackDuration}ms`
        }
    }, [attackDuration])

    return (
        <div className={styles.actions}>
            <img
                src={battleArrow}
                ref={pointingArrowRef}
                style={arrowTransform}
                alt="current attacking pokemon illustration"
                aria-hidden
            />
            <Button
                animate="true"
                disabled={isAttackDisabled}
                onClick={handleAttack}
            >
                Attack!
            </Button>
        </div>
    )
}

export default Actions