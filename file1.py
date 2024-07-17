import math
import pygame
import time

theta_spacing = 0.06981317007977318
phi_spacing = 0.052359877559982988
R1 = (200, 0, 0)
R2 = 100
d = 4000

# Initialize pygame
pygame.init()

# Set up the display
width, height = 1200, 1200
screen = pygame.display.set_mode((width, height))
clock = pygame.time.Clock()

def render():
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        screen.fill((0, 0, 0))
        for i in range(0, int(2 * math.pi / theta_spacing) + 1):
            for j in range(0, int(2 * math.pi / phi_spacing) + 1):
                theta = i * theta_spacing
                phi = j * phi_spacing

                x = (R1[0] + R2 * math.cos(theta)) * math.cos(phi)
                y = R2 * math.sin(theta)
                z = (R1[0] + R2 * math.cos(theta)) * math.sin(phi)

                angle = time.time() / 2

                rx = x
                ry = y * math.cos(angle) - z * math.sin(angle)
                rz = y * math.sin(angle) + z * math.cos(angle)

                px = (d * rx) / (rz + 4500) + width // 2
                py = (d * ry) / (rz + 4500) + height // 2

                pygame.draw.circle(screen, (255, 255, 255), (int(px), int(py)), 1)

        pygame.display.flip()
        clock.tick(60)

    pygame.quit()

render()
