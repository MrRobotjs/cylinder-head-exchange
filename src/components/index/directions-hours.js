import React from 'react'
import styled from 'styled-components';
import * as variable from 'src/config'
import GoogleMapReact from 'google-map-react';
import {darken,lighten} from 'polished'
import MapBg from 'src/images/bg-map.png' 

const DirectionsHours = ({WebsiteName, ShopAddress, MonSat, Sun}) => {
    return (
        <Section id="map">
          <Container>
            <MapContainer>
                <MapBtn aria-label="Get Directions" href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385" target="blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 51.636 51.636"
                    version="1.1"
                    viewBox="0 0 51.636 51.636"
                    xmlSpace="preserve">
                    <path d="M51.353.914a.999.999 0 00-1.135-.213L.583 23.481a1 1 0 00.252 1.895l22.263 3.731 2.545 21.038a1.002 1.002 0 001.889.324l24-48.415a1 1 0 00-.179-1.14z" />
                </svg>
                </MapBtn>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
                defaultCenter={{lat: 34.056489, lng: -117.685391}}
                defaultZoom={15}>
                <Tooltip data-tooltip={WebsiteName} data-tooltip-position="top"
                lat={34.056489}
                lng={-117.685391}></Tooltip>
                </GoogleMapReact>
            </MapContainer>
            <InformationContainer>
              <div>
                <AddressHeader>Address</AddressHeader> <Address>{ShopAddress}</Address>
              </div>
                <HoursHeader>Shop Hours</HoursHeader>
                <TableHours>
                <tbody>
                    <Row>
                    <Data>Monday</Data>
                    <Data>{MonSat}</Data>
                    </Row>
                    <Row>
                    <Data>Tuesday</Data>
                    <Data>{MonSat}</Data>
                    </Row>
                    <Row>
                    <Data>Wednesday</Data>
                    <Data>{MonSat}</Data>
                    </Row>
                    <Row>
                    <Data>Thursday</Data>
                    <Data>{MonSat}</Data>
                    </Row>
                    <Row>
                    <Data>Friday</Data>
                    <Data>{MonSat}</Data>
                    </Row>
                    <Row>
                    <Data>Saturday</Data>
                    <Data>{MonSat}</Data>
                    </Row>
                    <Row>
                    <Data>Sunday</Data>
                    <Data style={{color: `${Sun === "Closed" ? `${lighten(0.32, variable.SiteColor)}` : "unset"}`,}}>{Sun}</Data>
                    </Row>
                </tbody>
                </TableHours>
            </InformationContainer>
          </Container>
      </Section>
    )
}

export default DirectionsHours

const TableHours = styled.table``
const Row = styled.tr``
const Data = styled.td``
const MapContainer = styled.div``
const AddressHeader = styled.p``
const HoursHeader = styled.p``
const InformationContainer = styled.div``
const Address = styled.p``
const MapBtn = styled.a``
const Tooltip = styled.span``
const Container = styled.div``

const Section = styled.section`
display: flex;
flex-wrap: wrap;
background-color: #f7f7f7;
  ${MapContainer} {
    flex: 1;
    position: relative;
    ${MapBtn} {
      position: absolute;
      bottom: 0.5rem;
      left: 0.5rem;
      background-color: ${variable.SiteColor};
      color: #fff;
      height: 55px;
      width: 55px;
      z-index: 1;
      text-decoration: unset;
      border-radius: 50%;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      transition: all 250ms ease-in-out;
      box-shadow: 0px 2px 10px -3px ${variable.SiteColor};
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &:hover,
      &:focus,
      &:active {
        box-shadow: 0px 2px 10px -1px ${variable.SiteColor};
        background-color: ${darken(0.12, variable.SiteColor)};
      }
      svg {
        height: 45%;
        width: 45%;
        align-self: center;
        fill: #fff;
        position: relative;
        top: 2px;
        right: 2px;
      }
    }
    ${Tooltip} {
      display: inline-block;
      position: relative;
      cursor: help;
      padding: 4px;
      height: 0.5rem;
      width: 0.5rem;
      background-color: red;
      border-radius: 50%;
      &::before {
        content: attr(data-tooltip);
        position: absolute;
        background: #000;
        color: #fff;
        padding: 4px 8px;
        font-size: 14px;
        line-height: 1.4;
        min-width: 107px;
        text-align: center;
        border-radius: 4px;
        font-family: "Racing Sans One";
      }
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        z-index: 50;
      }
      &[data-tooltip-position="top"] {
        &::before {
          left: -500%;
          bottom: 100%;
          margin-bottom: 6px;
        }
        &::after {
          left: 50%;
          margin-left: -6px;
          bottom: 100%;
          border-width: 6px 6px 0;
          border-top-color: #000;
        }
      }
    }
  }
  ${InformationContainer} {
    background-color: ${variable.SiteColor};
    background-color: #1b1b1b;
    flex: 1;
    padding: 2rem 2.5rem;
    background-image: url(${MapBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${AddressHeader}, ${HoursHeader} {
      color: #fff;
      font-weight: bold;
      font-size: 1.7rem;
      display: -webkit-inline-box;
      position: relative;
      margin-bottom: 0.8rem;
      &::after {
        content: "";
        width: 30%;
        height: 0.2rem;
        position: absolute;
        bottom: -4px;
        left: 0;
        z-index: 1;
        background-color: #fff;
      }
    }
    ${Address} {
      color: #fff;
    }
    ${TableHours} {
      margin: unset;
      margin-top: 0.4rem;
      tbody {
        ${Row} {
          ${Data} {
            padding-top: unset;
            color: #fff;
            border-bottom: unset;
            &:first-child {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
@media screen and (max-width: 798px) {
  padding: 3.5rem 0;
  ${Container} {
    flex-direction: column;
    margin: 0 2rem;
    box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.6);
    border-radius: 3rem;
    ${MapContainer} {
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      overflow: hidden;
      height: 20rem;
      div {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }
    }
    ${InformationContainer} {
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }
  }
}
@media screen and (max-width: 362px) {
  ${MapContainer} {
    height: 17rem;
  }
  ${InformationContainer} {
    ${AddressHeader},
    ${HoursHeader} {
      font-size: 1.6rem;
    }
    ${TableHours} {
      ${Row} {
        ${Data} {
          font-size: 0.9rem;
        }
      }
    }
  }
}
@media screen and (max-width: 341px) {
  ${MapContainer} {
    height: 16rem;
  }
  ${InformationContainer} {
    ${AddressHeader},
    ${HoursHeader} {
      font-size: 1.5rem;
    }
    ${TableHours} {
      ${Row} {
        ${Data} {
          font-size: 0.8rem;
        }
      }
    }
  }
}
@media screen and (max-width: 319px) {
  ${InformationContainer} {
    ${AddressHeader},
    ${HoursHeader} {
      font-size: 1.4rem;
    }
    ${TableHours} {
      ${Row} {
        ${Data} {
          font-size: 0.7rem;
          padding-bottom: 0.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 319px) {
  ${MapContainer} {
    height: 14rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    div {
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
    }
  }
  ${InformationContainer} {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    ${AddressHeader},
    ${HoursHeader} {
      font-size: 1.3rem;
    }
    ${TableHours} {
      ${Row} {
        ${Data} {
          font-size: 0.6rem;
        }
      }
    }
  }
}
`