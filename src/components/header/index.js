import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background,ButtonLink, Container, Dropdown,PlayButton, Picture, Profile, Group, Link, Logo, Feature, Text, FeatureCallOut, Search, SearchIcon, SearchInput } from "./styles/header"

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );
  }

Header.Feature =  function HeaderFeater({children , ...restProps}){
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut =  function HeaderFeaterCallOut({children , ...restProps}){
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text =  function HeaderText({children , ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

Header.TextLink =  function HeaderTextLink({children , ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

Header.PlayButton =  function HeaderPlayButton({children , ...restProps}){
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Frame = function HeaderFrame({bg=true, children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({bg=true, children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
  const [searchActive, setSearchActive] = useState(false)

  return(
    <Search{...restProps}>
    <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput 
        value={searchTerm}
        onChange={({target})=>setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  )
}