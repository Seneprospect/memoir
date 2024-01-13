// PodcastComponent.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import EpisodeList from './EpisodeList';  // Assurez-vous d'importer le composant EpisodeList
import { podcastsData } from '../pages/data';

function PodcastComponent() {
  const { podcastId } = useParams();

  // Recherche du podcast avec l'id correspondant
  const podcast = podcastsData.find(podcast => podcast.id.toString() === podcastId);

  if (!podcast) {
    return <div>Podcast non trouvé</div>;
  }

  return (
    <div>
      <h2>{podcast.title}</h2>
      <img src={podcast.image} alt={podcast.title} />

      <h3>Épisodes</h3>
      <EpisodeList episodes={podcast.episodes} />

      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default PodcastComponent;
