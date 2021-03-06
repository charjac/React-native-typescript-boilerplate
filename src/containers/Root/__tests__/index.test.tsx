import React from 'react'
import { Provider, Store } from 'react-redux'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import { Root, mapStateToProps } from '../index'

import configureStore from 'redux-mock-store'
import { translationMessages } from '../../../i18n'
import initialState from '../../../store/initialState'

const mockStore = configureStore()

describe('Root component', () => {
    let store = mockStore({})
    const mockProps = {
        bootstrap: () => ({ type: 'TEST' }),
        nav: {
            index: 0,
            routes: [
                {
                    key: 'test',
                    routeName: 'Home',
                },
            ],
        },
    }
    const spy = jest.spyOn(mockProps, 'bootstrap')

    const tree = renderer
        .create(
            <Provider store={store}>
                <IntlProvider locale={'en'} messages={translationMessages.en}>
                    <Root {...mockProps} />
                </IntlProvider>
            </Provider>
        )
        .toJSON()

    const simpleTree = renderer
        .create(
            <Provider store={store}>
                <IntlProvider locale={'en'} messages={translationMessages.en}>
                    <Root nav={mockProps.nav} />
                </IntlProvider>
            </Provider>
        )
        .toJSON()

    beforeEach(() => {
        store = mockStore({})
    })

    it('should renders correctly', () => {
        expect(tree).toMatchSnapshot()
    })

    it('should renders correctly without getLocale prop', () => {
        expect(simpleTree).toMatchSnapshot()
    })

    it('should call getLocale prop', () => {
        expect(spy).toHaveBeenCalled()
    })

    describe('mapStateToPropsFunction', () => {
        it('should return the navigation state in an object', () => {
            expect(mapStateToProps(initialState, null)).toEqual({
                nav: initialState.navigation,
                appReady: true,
            })
        })
    })
})
