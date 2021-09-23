import React from 'react';
import { Feature, OptForm } from '../components';
import {HeaderContianer} from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from "../containers/jumbotron"

export  function Home() {
    return(
        <>
            <HeaderContianer >
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV programmes and more
                    </Feature.Title>
                    <Feature.SubTitle>
                        watch anywhere, cancel at anytime.
                    </Feature.SubTitle> 
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>
                        ready to watch? enter your email to create or restart your membership
                    </OptForm.Text>
                </OptForm>
                </Feature>
            </HeaderContianer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}