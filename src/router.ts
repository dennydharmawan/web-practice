// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client';

export type Path =
  | `/`
  | `/animation/card`
  | `/animation/framer-motion/header-logo`
  | `/animation/framer-motion/switch`
  | `/animation/hamburger-menu`
  | `/experiments/content-grid`
  | `/experiments/tailwind-theme`
  | `/experiments/vertical-align`
  | `/icodethis/426-testimonial-carousel`
  | `/icodethis/437-music-profile`
  | `/icodethis/444-simple-pricing`
  | `/icodethis/445-social-profile`
  | `/icodethis/446-subcription-pricing`
  | `/icodethis/icodemas/day-1`
  | `/icodethis/icodemas/day-12`
  | `/icodethis/icodemas/day-13`
  | `/icodethis/icodemas/day-2`
  | `/icodethis/icodemas/day-21`
  | `/icodethis/restaurant-app`
  | `/layout/grid-container`
  | `/static/dice-bear-flashlight`;

export type Params = {};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>();
export const { redirect } = utils<Path, Params>();
