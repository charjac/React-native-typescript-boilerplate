import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'

import Slideshow from 'components/Slideshow'

import { IRootProps, IRootState } from './types'

class Root extends PureComponent<IRootProps, IRootState> {

    state = {
        items: [
            {
                title: 'Some Bullshit',
                poster: {
                    uri: 'http://lorempixel.com/150/220/',
                },
                screen: {
                    uri: 'http://lorempixel.com/400/300/',
                },
            },
            {
                title: 'Some nature',
                poster: {
                    uri: 'https://placeimg.com/150/220/nature',
                },
                screen: {
                    uri: 'https://placeimg.com/400/200/nature',
                },
            },
            {
                title: 'Some animals',
                poster: {
                    uri: 'https://placeimg.com/150/220/animals',
                },
                screen: {
                    uri: 'https://placeimg.com/400/200/animals',
                },
            },
        ],
    }

    render() {
        const { items } = this.state

        return (
            <ScrollView>
                <Slideshow items={items} arrows={true} />
            </ScrollView>
        )
    }
}

export default Root
